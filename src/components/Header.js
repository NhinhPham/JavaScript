const Header = () => {
    return /*html*/ `
</head>
<body class="">
  <header class="bg-gray-800 text-white p-4 w-full">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-2xl font-semibold">Your Website</h1>
      <nav class="mt-2">
        <ul class="flex space-x-4">
          <li><a href="/" class="hover:text-gray-300">Home</a></li>
          <li><a href="/about" class="hover:text-gray-300">About</a></li>
          <li><a href="" class="hover:text-gray-300">YourCard</a></li>
          <li><a href="/login" class="hover:text-gray-300">Sign In</a></li>
          <li><a href="/register" class="hover:text-gray-300">Sign Up</a></li>
          <li><a href="" class="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
    `

}


export default Header;