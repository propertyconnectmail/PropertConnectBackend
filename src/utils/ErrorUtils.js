class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}

class ValidationError extends CustomError {
    constructor(message = 'Validation failed') {
        super(message, 400);
    }
}

class AuthenticationError extends CustomError {
    constructor(message = 'Authentication failed') {
        super(message, 401);
    }
}

class AuthorizationError extends CustomError {
    constructor(message = 'Not authorized') {
        super(message, 403);
    }
}

class NotFoundError extends CustomError {
    constructor(message = 'Resource not found') {
        super(message, 404);
    }
}

module.exports = {
    CustomError,
    ValidationError,
    AuthenticationError,
    AuthorizationError,
    NotFoundError
};
