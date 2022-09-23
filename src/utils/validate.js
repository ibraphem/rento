export const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /[\d]{11}/;
    return phoneNumberRegex.test(phoneNumber)
}

export const validateBVN = (bvnNumber) => {
    if(bvnNumber?.length === 1) {
        return true
    }

    return false
}