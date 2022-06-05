const handleErrorAsync = function handleErrorAsync(func) {
  // func 先將 async fun 帶入參數儲存
  console.log(func);
  return function (data, next) {
    // 再執行函式，async 可再用 catch 統一捕捉
    func(data, next).catch(
      (error) => next(error),
    );
  };
};

module.exports = handleErrorAsync;
