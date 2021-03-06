# 알고리즘 기초 1/2

## 목차

- [알고리즘 기초 1/2](#알고리즘-기초-12)
  - [목차](#목차)
  - [❌ 정리 및 복습](#-정리-및-복습)
  - [알고리즘 시작](#알고리즘-시작)
  - [자료구조 1](#자료구조-1)
    - [스택](#스택)
    - [큐](#큐)
    - [덱](#덱)
    - [연습문제](#연습문제)
  - [수학 1](#수학-1)
  - [다이나믹 프로그래밍 1](#다이나믹-프로그래밍-1)

## ❌ 정리 및 복습

## 알고리즘 시작

- BigO로 최악경우 얼마나 걸리는지 예상
- 문제의 제한을 보고 어떤 알고리즘으로 풀 수 있을지 파악 (예. N^3으로도 풀 수 있을까?)

## 자료구조 1

> 알고리즘을 풀 때, 어떤 자료구조를 사용하면 효율적으로 풀 수 있을지 생각해보는 것도 중요할 것같다.

- 스택
- 큐
- 덱

### 스택

- 특징
  - 한쪽 끝에서만 자료를 넣고 뺄 수 잇는 자료구조
  - LIFO
- 용도
  - 순서를 뒤집을 때
  - 마지막에 있는 것이 의미를 가질 때

(추후 사용할 때에는 라이브러리에 구현되어있는 스택을 사용하면 된다)

```cpp
int stack[1000];
int size = 0;

// 다음 메서드를 제공함으로서 손쉽게 구현할 수 있음
void push(int data) {}
void pop() {}
void top() {}
void isEmpty() {}
```

### 큐

- 특징
  - 한쪽 끝에서만 자료를 넣고 다른 한쪽 끝에서만 자료를 뺄 수 있는 구조
  - 넣은 순서대로 나오기 때문에 (순서가 의미를 가질 때 많이 사용)
- 용도
  - BFS
  - 순서가 의미를 가질 때

```cpp
int queue[1000]
int begin = 0;
int end = 0;
// [begin, end) 에만 자료가 있다.

void push(int data) {
  queue[end] = data;
  end += 1;
}
void pop() {
  queue[begin] = 0;
  begin += 1;
}
void isEmpty() {}
void size() {}
```

### 덱

- 양 끝에서 자료를 넣고 양 끝에서 자료를 뺄 수 있는 자료구조

```cpp
// push_front
// push_back
// pop_front
// pop_back
// front
// back
```

### 연습문제

- [단어 뒤집기 2](https://www.acmicpc.net/problem/17413)
- [쇠막대기](https://www.acmicpc.net/problem/10799)
- [오큰수](https://www.acmicpc.net/problem/17298)

## 수학 1

<!-- TODO: -->

## 다이나믹 프로그래밍 1

<!-- TODO: -->
