const ResponseUtils = {
    success: (res, data = {}, message = 'Success', statusCode = 200) => {
        return res.status(statusCode).json({
            success: true,
            message,
            data
        });
    },

    error: (res, errorMessage = 'Something went wrong', statusCode = 500) => {
        return res.status(statusCode).json({
            success: false,
            message: errorMessage
        });
    }
};

module.exports = ResponseUtils;
