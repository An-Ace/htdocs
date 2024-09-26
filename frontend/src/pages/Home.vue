<template>
  <div class="grid md:grid-cols-2">
    <div class="min-h-screen grid place-content-center text-black">
      <div class="w-96 bg-white">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <div class="py-4"><img src="/logo.png" alt=""></div>
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"> Sign In </h1>
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label for="email" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Username</label>
              <input type="email" name="email" id="email" class="border border-gray-300 rounded-md text-gray-900 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter Your Username" required="">
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Password</label>
              <input type="password" name="password" id="password" placeholder="Enter Your Password" class="border rounded-md border-gray-300 text-gray-900 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="">
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                </div>
              </div>
              <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
            </div>
            <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
            <p class="text-sm font-semibold flex justify-center"> Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500 font-semibold">&nbsp;Sign up</a> </p>
          </form>
        </div>
      </div>

    </div>
    <div class="bg-gradient-to-tl from-purple-800 to-blue-500 min-h-screen grid place-content-center">
      <img src="/illustration.png" alt="" class="w-[600px]">
    </div>
  </div>
</template>
<script setup lang="ts">
  
</script>