// import Swal from 'sweetalert2';

const errorHandler = (error) => {
  const { request, response } = error;
  console.log(request, response);
  let statusCode = '';
  // server返回的http狀態碼不是2xx, 如: 400 500
  if (request) {
    statusCode = error.request ? error.request.status : null;
  }

  // 請求已發出, 但未收到回應, 如:斷網
  if (response) {
    statusCode = error.response ? error.response.status : null;
  }

  console.log(statusCode);
  switch (statusCode) {
    case 400:
      // Swal.fire('error', error.data.message, 'error');
      console.log('400錯誤');
      break;
    case 401:
      // Swal.fire('error', error.data.message, 'error');
      console.log('未登入或沒權限');
      break;
    case 403:
      // Swal.fire('error', error.data.message, 'error');
      console.log('未登入或沒權限');
      break;
    case 404:
      // Swal.fire('error', '無此頁面', 'error');
      break;
    case 500:
      // Swal.fire('error', error.data.message, 'error');
      console.log('500錯誤');
      break;
    case 503:
      // Swal.fire('error', error.data.message, 'error');
      console.log('503錯誤');
      break;
    default:
      // 请求被取消或者发送请求时异常，对应上面的 2 & 3
      // Swal.fire('error', '其他錯誤', 'error');
      console.log('其他錯誤');
      break;
  }
};

module.exports = errorHandler;

// export default errorHandler;/
