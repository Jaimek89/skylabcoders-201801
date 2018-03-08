function success(data) {
    const res = { status: 'OK' }

    if (data) res.data = data

    return res
}

function fail(error) {
    const res = { status: 'KO' }

    if (error) res.error = error

    return res
}

function validate(user) {
    for (const prop in user) {
        const value = user[prop]

        if (typeof value === 'undefined' || !value.trim().length) throw Error(`${prop} cannot be undefined or empty`)
    }
}

module.exports = { success, fail, validate }