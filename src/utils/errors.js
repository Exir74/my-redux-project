const errorMessages = {
  400: "Не корректный запрос",
  401: "Ошибка авторизации",
  403: "Недостаточно прав для осуществления запроса",
  404: "Не удалось найти",
};

function getErrorMessage(errorStatusCode) {
  if (errorStatusCode in errorMessages) {
    return errorMessages[errorStatusCode];
  } else if (errorStatusCode >= 500) {
    return "Ошибка на стороне сервера";
  } else {
    return "Неизвестная ошибка";
  }
}

export { getErrorMessage };
