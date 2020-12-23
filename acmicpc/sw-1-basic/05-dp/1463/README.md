# 1로 만들기

3으로 나누는게 가장 빠르게 수를 작게 만드므로 무조건 먼저 적용하면 최소가 될 것같지만,
10의 경우에는 1을 먼저 빼는게 더 빠르다.

D[n]을 N을 1로 만드는 최소 연산으로 잡고 시작하자.

- N -> N/3 : D[N/3] + 1
- N -> N/2 : D[N/2] + 1
- N -> N-1 : D[N-1] + 1;

D[n] = min(D[N/3], D[n/2], D[n -1]) + 1

## 코드

```cpp
int go(int n) {
  if (n== 1) return 0;
  if (d[n] > 0 ) return d[n];

  d[n] = go(n-1) + 1;

  if (n%2 ==0) {
    int temp = go(n/2) + 1;
    if (d[n] > temp) d[n] = temp;
  }

  if (n%3 ==0) {
    int temp = go(n/3) + 1;
    if (d[n] > temp) d[n] = temp;
  }

  return d[n];
}
```

```cpp
d[1] = 0;
for (int i=2; i<= n; i++) {
  d[i] = d[i -1] + 1;
  if (i%2 == 0 && d[i] > d[i/2] + 1) {
    d[i] = d[i/2] + 1;
  }
  if (i%3 == 0 && d[i] > d[i/3] + 1) {
    d[i] = d[i/3] + 1;
  }
}
```

시간 복잡도는 D[N] = MIN (D,D,D) +1 이므로 " 문제 무넺의 개수 \* 1문제 푸는 시간".

배열의 크기 \* O(1) = O(N)
(O(1)인 이유는 MIN(D,D,D)를 구하는 과정이 반복문 없이 단순 연산의 조합이므로)
