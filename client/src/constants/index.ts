export const currencies = {
    "USD $": "$",
    "EUR €": "€",
    "GBP £": "£",
    "JPY ¥": "¥",
    "CNY ¥": "¥",
    "CHf ₣": "₣",
    "INR ₹": "₹",
    "IQD ع": "ع",
    "RUB ₽": "₽",
    "GEL ₾": "₾",
    "TRY ₺": "₺",
    "AZN ₼": "₼",
    "KZT ₸": "₸",
    "THB ฿": "฿",
    "KRW ₩": "₩",
    "VND ₫": "₫",
    "MNT ₮": "₮",
    "MXN ₱": "₱"
}

export const currencyNames = [
    "Dollar",
    "Euro",
    "Pound",
    "Yen",
    "Yuan",

]

export const motionContainer = {
    hidden: {
        opacity: 0,
        y: -100
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
        }
    }
}

export const motionItem = {
    hidden: {
        opacity: 0,
        y: -100
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2,
            staggerChildren: 0.05
        }
    }
}