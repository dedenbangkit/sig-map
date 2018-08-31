<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Collection;

class Database extends Model
{
    /*
    public function getTotalStudentsAttribute()
    {
        $total = $this->attributes['28390924'] + $this->attributes['23430922'];
        return $total;
    }
     */

    public function locations()
    {
        $db = collect($this->all('longitude','latitude','identifier', 'display_name'))->map(function($data) {
            $results = Array( 
                'latlng' => [(float) $data->latitude, (float) $data->longitude],
                'id' => $data->identifier,
                'name' => $data->display_name
            );
            return $results;
        });
        return $db;
    }

    public function search($q)
    {
        $db = $this->select('28390923 as school', 'identifier', 'latitude', 'longitude')
            ->where('school', 'LIKE', '%'.$q.'%')
            ->orWhere('identifier', 'LIKE', '%'.$q.'%')
            ->take(5)->get();
        return $db;
    }

    public function details($id)
    {
        $db = $this->where('identifier', $id)->first();
        return $db;
    }

    public function datatable()
    {
        return $this->select(
            '28390923', 
            '23430921', 
            '22480946', 
            'identifier',
            '26390924',
            '28390924 as s_girls',
            '23430922 as s_boys',
            '20490967 as t_toilet',
            '20510942 as s_toilet',
            '22530927 as t_girls',
            '27360922 as t_boys'
        );
    }

}
