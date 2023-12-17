// Slider Home
export const homecarousel = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6 - 1.8
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
export const homecarousel2 = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6 - 1.5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 10 - 1.5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
export const responsive2 = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export const SignWithUser = () => {
    document.getElementById("login-with-username").style.display = "block"
    document.getElementById("user-forget-password").style.display = "none";
    document.getElementById("login-with-otp").style.display = "none"
    document.getElementById("username-signup").style.display = "none";
}
export const SignWithMobile = () => {
    document.getElementById("login-with-username").style.display = "none";
    document.getElementById("login-with-otp").style.display = "block"
}
export const OpenRegister = () => {
    document.getElementById("username-signup").style.display = "block";
    document.getElementById("login-with-otp").style.display = "none";
    document.getElementById("login-with-username").style.display = "none";
}
export const OpenForgetpass = () => {
    document.getElementById("user-forget-password").style.display = "block";
    document.getElementById("login-with-username").style.display = "none";
}


// Password View 
export const TogglePassword = () => {
    const password = document.getElementById('password');
    const toggler = document.getElementById('toggler');
    if (password.type == 'password') {
        password.setAttribute('type', 'text');
        toggler.classList.add('fa-eye');
    } else {
        toggler.classList.remove('fa-eye');
        password.setAttribute('type', 'password');
    }
}
export const TogglePassword2 = () => {
    const password = document.getElementById('password2');
    const toggler = document.getElementById('toggler2');
    if (password.type == 'password') {
        password.setAttribute('type', 'text');
        toggler.classList.add('fa-eye');
    } else {
        toggler.classList.remove('fa-eye');
        password.setAttribute('type', 'password');
    }
}

export const TogglePassword3 = () => {
    const password = document.getElementById('password3');
    const toggler = document.getElementById('toggler3');
    if (password.type == 'password') {
        password.setAttribute('type', 'text');
        toggler.classList.add('fa-eye');
    } else {
        toggler.classList.remove('fa-eye');
        password.setAttribute('type', 'password');
    }
}

 