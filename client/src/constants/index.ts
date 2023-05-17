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

export const activityLevels = {
    "Sedentary:": "Little to no exercise",
    "Lightly Active:": "exercise 1-3 times/week",
    "Moderately Active:": "exercise 4-5 times/week",
    "Active:": "exercise daily or intense exercise 3-4 times/week",
    "Very Active": "intense exercise 6-7 times/week",
    "BMR:": "Besal Metabolic Rate"
}

export const workoutLevels = {
    "Exercise:": "15-30 minutes of elevated heart rate activity.",
    "Intense exercise:": "45-120 minutes of elevated heart rate activity."
}