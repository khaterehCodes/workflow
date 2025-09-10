const FakeLogin = async (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === "read@gmail.com") {
                resolve({ token: 'fakeJWT', role: 'reader' })
            } else if (email === 'edit@gmail.com') {
                resolve({ token: 'fakeJWT', role: 'editor' })
            } else {
                reject({ message: 'No user exist' })
            }
        }, 1000)
    })
}
export default FakeLogin