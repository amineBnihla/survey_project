<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Password;

class AuthController extends Controller
{
    function register(Request $request)
    {
        $request->validate([
            "user_name" => "required|string",
            "email" => "required|email|unique:users,email",
            "password" => ["required", "confirmed", Password::min(8)->mixedCase()->numbers()->symbols()]
        ]);

        $user = User::create([
            "name" => $request->user_name,
            "email" => $request->email,
            "password" => bcrypt($request->password)
        ]);

        $token = $user->createToken('main')->plainTextToken;
        return response([
            "user" => $user,
            "token" => $token
        ], 200);
    }
    function login(Request $request)
    {
        $request->validate([
            "email" => "required|email",
            "password" => "required"
        ]);

        if (!Auth::attempt($request)) {
            return response([
                "error" => "Your credentials are not correct. Try Again"
            ], 422);
        }

        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;

        return response([
            "user" => $user,
            "token" => $token
        ], 200);
    }
}
