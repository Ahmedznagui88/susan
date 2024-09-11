<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="/media/svg/smallogo.png" type="image/x-icon">
    @vite(['resources/css/app.css', 'resources/js/app.js'])

    <title>Susan Nail</title>

    {{-- ! styling loading pages --}}
    <style>
        #preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #fffdf7;

            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            z-index: 10000;

        }

        #loader {
            display: flex;
            align-items: center;

        }

        #loader span {
            display: block;
            width: 30px;
            height: 30px;
            margin: 0 5px;
            background: #000000;
            border-radius: 50%;
            animation: bounce 0.6s infinite alternate;
        }

        #loader span:nth-child(2) {
            animation-delay: 0.2s;
        }

        #loader span:nth-child(3) {
            animation-delay: 0.4s;
        }

        @keyframes bounce {
            to {
                opacity: 0.3;
                transform: translateY(-20px);
            }
        }

        #progress-text {
            font-family: "La Mango";
            font-size: 300px;
            color: #000000
        }
    </style>
</head>

<body>
    {{-- ! loading page --}}
    <div id="preloader">
        <div id="progress-text">0%</div>
        <div id="loader">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>

    

    {{-- ! slot --}}
    <div id="smooth-wrapper">
        <div id="smooth-content">
            <div class="min-vh-100">
                {{ $slot }}
                <x-footer />
            </div>
        </div>
    </div>

</body>

</html>
