<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="/media/svg/smallogo.png" type="image/x-icon">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <title>Susan Nail</title>
</head>

<body>


    <div id="smooth-wrapper">
        <div id="smooth-content">
            <div class="min-vh-100">
               {{--  <x-navbar /> --}}
                {{ $slot }}
                <x-footer />
            </div>
        </div>
    </div>
</body>

</html>
