# 수학

- [수학](#수학)
  - [✅ 복습](#-복습)
    - [🔧 문제 해결](#-문제-해결)
    - [🔥 다시 풀어보기](#-다시-풀어보기)
  - [나머지 연산](#나머지-연산)
  - [최대 공약수 (GCD)](#최대-공약수-gcd)
  - [최소 공배수 (LCM)](#최소-공배수-lcm)
  - [소수 (Prime Number)](#소수-prime-number)
    - [에라토스테네스의 체](#에라토스테네스의-체)

## ✅ 복습

- 최대 공약수 구하기
  - 유클리드 호제법 GCD(a,b) === GCD(b, a%b) 이고 이 때 (a%b)가 0이면 그 때의 b가 최대 공약수 `코드 구현`
- 최소 공배수 구하기
  - `(A*B) / GCD(A,B)`

### 🔧 문제 해결

- C++ 에서 int sum 등을 구할 때 int 자료형을 넘어갈 수 있다. 문제 조건을 잘 파악해서 이런 경우 long long 을 사용해주어야함 [9613](./9613)
- C++ 에서 배열을 초기화 할 때, 기본값을 지정해주지 않으면 쓰레기 값이 들어갈 수 있다. 다음과 같이 지정해주자. [1978](./1978)

  ```cpp
  int arr[100] = {false}; // false로 초기화
  ```

### 🔥 다시 풀어보기

- https://www.acmicpc.net/problem/6588

## 나머지 연산

문제에서 "정답을 1,000,000,007로 나눈 나머지"를 출력하라. 라는 내용이 나오는데 이를 풀기위해 나머지 연산을 제대로 알아야함.

이런 경우 결과가 표현범위를 넘어서기 때문에 이런 조건이 붙음.

- int: 2^31 - 1
- long long: 2^63 - 1 -> 약 10^18

결과가 10^50 정도라면 위 두 자료형으로는 표현이 불가함

정답을 완벽하게 구한 후에 나머지 연산을 하라는게 아니라, 연산 과정에서 나머지 연산을 지속적으로 수행해서 결과를 구하면 됨

- 이유

  - `(A + B) % C` = `(A % C + B % C) % C`
  - `(A - B) % C` = `(A % C - B % C) % C`
    - (a%c - b%c) 의 결과는 -c < (a%c - b%c) < 2c
    - 그래서 (a%c - b%c + c)가 0보다 크기 때문에 이 상태에서 c로 나눠주면 원하는 결과 도출 가능
  - `(A X B) % C` = `(A % C X B % C) % C`
  - 나머지는 성립하지 않음 (6%3)%3 = 2%3 = 2, (6%3/3%3)%3 = (0/0)%3
    - 나누기는 Modular Inverse를 구해야하는데 잘 등장하진 않음
    - (a/b)%c -> (a\*b^(c-2)) %c (페르마의 소정리, c는 소수, a,b는 서로소) (딱히 알필요X)

- 음수의 경우에는 % 연산이 프로그래밍 언어에 따라 결과가 다르다.
  - (6 % 3 - 5 % 3) % 3
    - C++: -2
    - Java: -2
    - Python3: 1

## 최대 공약수 (GCD)

- 약수: 어떤수 N을 나눌 수 있는 수 (나머지 없이)
- 기약분수 -> 분자/분모 각각 분자/분모의 최대 공약수로 나누면 됨

```cpp
// 2 ~ N까지 가므로 O(N)
int g = 1;
for (int i = 2; i < min(a, b); i++) {
  if (a % i == 0 && b % i == 0) {
    g = i; // i는 항상 커지기 때문에 g가 i보다 큰지는 검사하지 않아도 됨
  }
}

// 유클리드 호제법
// GCD(a,b) === GCD(b, a%b) 이때 (a%b)가 0이면 그 때 b가 최대 공약수

// O(logN)
int gcd(int a, int b) {
  if (b == 0) {
    return a;
  } else {
    return gcd(b, a % b)
  }
}

// O(logN)
int gcd(int a, int b) {
  while (b != 0) {
    int r = a % b;
    a = b;
    b = r;
  }
  return a;
}
```

세 수의 최대공약수는 GCD(a,b,c) === GCD(GCD(a,b), c)

## 최소 공배수 (LCM)

- (A X B) / GCD

## 소수 (Prime Number)

> 상당히 중요한 수!

약수가 1과 자기 자신 뿐인 수

N이 소수라면 2보다 크거나 같고, N-1보다 작거나 같은 수로 나누어 떨어지면 안됨

- 어떤 방법이 있나?
  1. 어떤 수 N이 소수인지 판단
  2. N보다 작거나 같은 모든 자연수 중에서 소수를 찾는 방법

```cpp
// O(n)
bool prime(int n) {
  if (n < 2) {
    return false;
  }

  for (int i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}
```

```cpp
// O(n/2) = O(n)
bool prime(int n) {
  if (n < 2) {
    return false;
  }

  for (int i = 2; i < n/2; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}
```

- N이 소수가 되려면, 2보다 크거나 같고, 루트N 보다 작거나 같은 자연수로 나누어 떨어지면 안된다.
  - (N = axb, a<=b 라면 a<=rootN, b>=rootN)

```cpp
// O(root n)
bool prime(int n) {
  if (n < 2) {
    return false;
  }

  for (int i = 2; i * i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}
```

### 에라토스테네스의 체

1~N 범위 내의 소수를 구하는데 유용한 알고리즘

1. 1 ~ N까지의 수를 격자에 배치
2. 소수를 찾으면 그 수의 배수를 다 지움
3. `N * N` 이 N을 넘으면 더이상 탐색하지 않아도 되므로 종료

```cpp
// N(loglogN) -> 매우 좋은 알고리즘!
int prime[100];
int pn = 0;
bool check[101];
int n = 100;

for (int i=2; i<=n; i++) {
  if (check[i] == false) {
    primt[pn++] = i;
    for (int j = i*i; j <= n; j+=i) { // i*i 대신 i*2나 i+i로 하는게 안전
      check[j] = true;
    }
  }
}
```
