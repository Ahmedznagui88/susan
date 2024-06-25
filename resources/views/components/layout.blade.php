<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <title>Document</title>
</head>

<body>
    <div id="smooth-wrapper">
        <div id="smooth-content">
            <x-navbar />
            <div class="min-vh-100">
                {{ $slot }}
            </div>
        </div>
    </div>
    <script src="https://unpkg.com/split-type"></script>
</body>

</html>
