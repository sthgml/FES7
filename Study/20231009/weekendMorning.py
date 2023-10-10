import discord
import asyncio
from discord.ext import commands, tasks
from datetime import datetime, time, timedelta

intents = discord.Intents.default()
bot = commands.Bot(command_prefix='!', intents=intents)

channel_id = 813000208467361867  # 스레드를 생성할 채널 ID

@bot.event
async def on_ready():
    print("봇이 온라인으로 전환되었습니다.")
    create_thread.start()  # 봇이 준비되었을 때 작업 시작

@tasks.loop(hours=24)  # 매일 24시간마다 작업 실행
async def create_thread():
    now = datetime.now()
    target_time = time(21, 0, 0)  # 오후 9시

    # 매일 오전 9시에 스레드 생성
    if now.time() >= target_time:
        next_target = datetime.combine(now.date() + timedelta(days=1), target_time)
    else:
        next_target = datetime.combine(now.date(), target_time)

    time_until_next = (next_target - now).total_seconds()
    await asyncio.sleep(time_until_next)  # 다음 실행 시간까지 대기

    channel = bot.get_channel(channel_id)
    if channel:
        thread_name = now.strftime('%m/%d') + " To-Do List"
        thread = await channel.create_thread(
            name=thread_name,
            auto_archive_duration=1440  # 24시간
        )

        thread_link = thread.jump_url  # 생성된 쓰레드의 링크

        await channel.send(f"Good Evening!  {thread_link}")
        await thread.send(f"내일이면 휴일 시작입니다! {now.strftime('%m')} 월 {now.strftime('%d')}입니다. \n내일 오전에  :)")

bot.run(token)