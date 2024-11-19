// 피보나치 수열: 각 숫자가 앞의 두 숫자를 더한 값으로 구성됩니다.
// 예시: 1, 1, 2, 3, 5, 8, 13, 21, ...

// fibonacci 함수 정의
const fibonacci = (n) => {
  // fibonacci(n)은 주어진 숫자 n번째 피보나치 수를 구하는 함수
  // n이 0 또는 1일 때는 그대로 n을 반환
  // 피보나치 수열의 첫 번째와 두 번째 숫자는 항상 1
  if (n === 0 || n === 1) return n;

  // 그 외의 경우는 재귀적으로 앞의 두 숫자의 합을 계산
  return fibonacci(n - 2) + fibonacci(n - 1);
  // fibonacci(n - 1)은 가장 최근 숫자
  // fibonacci(n - 2)는 그 전 숫자
  // 피보나치 수열은 각 숫자가 이전 두 숫자의 합으로 정의
  // 재귀 호출: n이 2 이상이면, 함수는 fibonacci(n-1)과 fibonacci(n-2)를 더해서 계산합니다. 이는 수학적으로 피보나치 수를 정의하는 방식입니다.
};

const fibonacci2 = (n, memo) => {
  if (n === 0 || n === 1) return n;

  if (memo[n] == null) {
    memo[n] = fibonacci2(n - 2, memo) + fibonacci2(n - 1, memo);
  }

  return memo[n];
};

// fibonacci 출력
let start = new Date(); // 함수 실행 전 현재 시간을 기록

// 5번째 피보나치 수를 출력
console.log(fibonacci(5)); // 5
// fibonacci(5)는 1, 1, 2, 3, 5 중 5번째 값을 계산하는 함수

// fibonacci(5) => fibonacci(4) + fibonacci(3)
// fibonacci(4) => fibonacci(3) + fibonacci(2)
// fibonacci(3) => fibonacci(2) + fibonacci(1)
// fibonacci(2) => fibonacci(1) + fibonacci(0)

let end = new Date(); // 함수 실행 후 시간을 기록
console.log(`fibonacci 함수 실행시간: ${end - start}ms`); // 실행 시간 출력
// console.log(fibonacci 함수 실행시간: ${end - start}ms);는 함수가 실행되는 데 걸린 시간을 밀리초(ms) 단위로 출력

// fibonacci2 출력
// 시작 시간 기록
start = new Date();

// fibonacci2 함수 호출, 5번째 피보나치 수 계산, 빈 배열을 두 번째 인자로 전달
console.log(fibonacci2(5, []));
// 메모이제이션은 계산한 값을 저장해두고, 다시 계산하지 않도록 하는 기법
// 이 기법을 사용하면 함수 호출을 최적화할 수 있습니다.
// 같은 값을 다시 계산할 때는 배열에서 저장된 값을 바로 반환합니다. 이렇게 하면 불필요한 중복 계산을 방지할 수 있다.
// 이렇게 실행하면 fibonacci2(5, [])는 5를 반환하고, 내부적으로 memo 배열을 사용하여 fibonacci(5) 계산을 최적화한 것입니다.

// 종료 시간 기록
end = new Date();

// fibonacci2 함수 실행에 걸린 시간 출력 (밀리초 단위로 출력)
console.log(`fibonacci 함수 실행시간: ${end - start}ms`);
