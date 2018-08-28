<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Collection;

class Database extends Model
{

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
}
