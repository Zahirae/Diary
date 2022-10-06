<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Diary;

class DiaryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Diary::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //return $request;
        /*$data = $request->validate([
            'title' => 'required',
            'content' => 'required',
            'date' => date('Y-m-d H:i:s'),
        ]);*/
        $data= [
            'title' => $request->input('title'),
            'date' => date('Y-m-d H:i:s'),
            'content' =>  $request->input('content'),
        ];

        //return $data;
        return Diary::create($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Diary  $Diary
     * @return \Illuminate\Http\Response
     */
    public function show(Diary $diary)
    {
        return $diary;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Diary  $Diary
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Diary $diary)
    {
        $validated_data = $request->validate([
            'title' => 'sometimes|required',
            'content' => 'sometimes|nullable',
        ]);

        $diary->update($validated_data);
        return $diary;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Diary  $Diary
     * @return \Illuminate\Http\Response
     */
    public function destroy(Diary $diary)
    {
        $diary->delete();
        return response()->json(null, 204);
    }
}
