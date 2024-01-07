class HttpType {
  static CONTINUE = { code: 100, message: "Continue" };
  static SWITCHING_PROTOCOLS = { code: 101, message: "Switching Protocols" };
  static PROCESSING = { code: 102, message: "Processing" };

  // ... Informational 1xx

  static OK = { code: 200, message: "OK" };
  static CREATED = { code: 201, message: "Created" };
  static ACCEPTED = { code: 202, message: "Accepted" };
  static NON_AUTHORITATIVE_INFORMATION = { code: 203, message: "Non-Authoritative Information" };
  static NO_CONTENT = { code: 204, message: "No Content" };
  static RESET_CONTENT = { code: 205, message: "Reset Content" };
  static PARTIAL_CONTENT = { code: 206, message: "Partial Content" };
  static MULTI_STATUS = { code: 207, message: "Multi-Status" };
  static ALREADY_REPORTED = { code: 208, message: "Already Reported" };
  static IM_USED = { code: 226, message: "IM Used" };

  // ... Successful 2xx

  static MULTIPLE_CHOICES = { code: 300, message: "Multiple Choices" };
  static MOVED_PERMANENTLY = { code: 301, message: "Moved Permanently" };
  static FOUND = { code: 302, message: "Found" };
  static SEE_OTHER = { code: 303, message: "See Other" };
  static NOT_MODIFIED = { code: 304, message: "Not Modified" };
  static USE_PROXY = { code: 305, message: "Use Proxy" };
  static SWITCH_PROXY = { code: 306, message: "Switch Proxy" };
  static TEMPORARY_REDIRECT = { code: 307, message: "Temporary Redirect" };
  static PERMANENT_REDIRECT = { code: 308, message: "Permanent Redirect" };

  // ... Redirection 3xx

  static BAD_REQUEST = { code: 400, message: "Bad Request" };
  static UNAUTHORIZED = { code: 401, message: "Unauthorized" };
  static PAYMENT_REQUIRED = { code: 402, message: "Payment Required" };
  static FORBIDDEN = { code: 403, message: "Forbidden" };
  static NOT_FOUND = { code: 404, message: "Not Found" };
  static METHOD_NOT_ALLOWED = { code: 405, message: "Method Not Allowed" };
  static NOT_ACCEPTABLE = { code: 406, message: "Not Acceptable" };
  static PROXY_AUTHENTICATION_REQUIRED = { code: 407, message: "Proxy Authentication Required" };
  static REQUEST_TIMEOUT = { code: 408, message: "Request Timeout" };
  static CONFLICT = { code: 409, message: "Conflict" };
  static GONE = { code: 410, message: "Gone" };
  static LENGTH_REQUIRED = { code: 411, message: "Length Required" };
  static PRECONDITION_FAILED = { code: 412, message: "Precondition Failed" };
  static PAYLOAD_TOO_LARGE = { code: 413, message: "Payload Too Large" };
  static URI_TOO_LONG = { code: 414, message: "URI Too Long" };
  static UNSUPPORTED_MEDIA_TYPE = { code: 415, message: "Unsupported Media Type" };
  static RANGE_NOT_SATISFIABLE = { code: 416, message: "Range Not Satisfiable" };
  static EXPECTATION_FAILED = { code: 417, message: "Expectation Failed" };
  static IM_A_TEAPOT = { code: 418, message: "I'm a teapot" };
  static MISDIRECTED_REQUEST = { code: 421, message: "Misdirected Request" };
  static UNPROCESSABLE_ENTITY = { code: 422, message: "Unprocessable Entity" };
  static LOCKED = { code: 423, message: "Locked" };
  static FAILED_DEPENDENCY = { code: 424, message: "Failed Dependency" };
  static UPGRADE_REQUIRED = { code: 426, message: "Upgrade Required" };
  static PRECONDITION_REQUIRED = { code: 428, message: "Precondition Required" };
  static TOO_MANY_REQUESTS = { code: 429, message: "Too Many Requests" };
  static REQUEST_HEADER_FIELDS_TOO_LARGE = { code: 431, message: "Request Header Fields Too Large" };
  static UNAVAILABLE_FOR_LEGAL_REASONS = { code: 451, message: "Unavailable For Legal Reasons" };

  // ... Client Errors 4xx

  static INTERNAL_SERVER_ERROR = { code: 500, message: "Internal Server Error" };
  static NOT_IMPLEMENTED = { code: 501, message: "Not Implemented" };
  static BAD_GATEWAY = { code: 502, message: "Bad Gateway" };
  static SERVICE_UNAVAILABLE = { code: 503, message: "Service Unavailable" };
  static GATEWAY_TIMEOUT = { code: 504, message: "Gateway Timeout" };
  static HTTP_VERSION_NOT_SUPPORTED = { code: 505, message: "HTTP Version Not Supported" };
  static VARIANT_ALSO_NEGOTIATES = { code: 506, message: "Variant Also Negotiates" };
  static INSUFFICIENT_STORAGE = { code: 507, message: "Insufficient Storage" };
  static LOOP_DETECTED = { code: 508, message: "Loop Detected" };
  static NOT_EXTENDED = { code: 510, message: "Not Extended" };
  static NETWORK_AUTHENTICATION_REQUIRED = { code: 511, message: "Network Authentication Required" };

  // ... Server Errors 5xx

  static getStatus(code) {
    const status = Object.values(this).find((error) => error.code === code);
    return status ? status.message : "Unknown Status Message";
  }

  static getMessage(msg) {
    const message = Object.values(this).find((errMsg) => errMsg.message === msg)
    return message ? message.code : "Unknown Code"
  }
}

export default HttpType ;
