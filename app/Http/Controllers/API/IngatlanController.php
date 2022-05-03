<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Ingatlanok;

class IngatlanController extends Controller
{
    public function index(){
        $ingatlanok = response()->json(Ingatlanok::with('kategoriak')->get());
        return $ingatlanok;
    }

    public function store(Request $request){
        $ingatlan = new Ingatlanok();
        $ingatlan->kategoria=$request->kategoria;
        $ingatlan->leiras=$request->leiras;
        $ingatlan->hirdetesDatuma=$request->hirdetesDatuma;
        $ingatlan->tehermentes=$request->tehermentes;
        $ingatlan->kepURL=$request->kepURL;
        $ingatlan->save();

        return Ingatlanok::find($ingatlan->id);
    }

    public function delete($id){
        $ingatlan=Ingatlanok::where('id',$id)->delete();
        return $ingatlan;
    }
}
