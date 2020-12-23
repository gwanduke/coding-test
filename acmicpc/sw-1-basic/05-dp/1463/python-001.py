# https://www.acmicpc.net/problem/15552
#
# 빠른 A+B

import sys

t = int(sys.stdin.readline().rstrip())

i = 0
while(i < t):
    i += 1
    x, y = map(int, sys.stdin.readline().rstrip().split())
    print(x + y)
