export async function fetchAdvise() {
  const response = await fetch(
    `https://api.adviceslip.com/advice`
  );
  const data = await response.json();
  return data.slip.advice;
}
export async function fetchAction(action) {
  let data = [];
  let ac = "this is example";
  if (action == -3) {
    return ac;
  }

  else {
    for (let i = 0; i <= action / 10+1; i++) {
      const response = await fetch(
        `https://www.boredapi.com/api/activity/`
      );
      ac = await response.json();
      data[i] = ac.activity;
    }
    return data;
  }
}