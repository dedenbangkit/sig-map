@extends('layouts.default')

@section('content')
<main role="main" class="col-md-12">
    <table class="table table-bordered" id="school_table">
        <thead>
            <tr>
                <th>School</th>
                <th>Province</th>
                <th>Type</th>
                <th>Reg</th>
                <th>Class</th>
                <th>Students</th>
                <th>Teacher</th>
                <th>Toilets</th>
                <th>Saperated</th>
                <th>Wash Fac</th>
                <th>Safe to Drink</th>
                <th>Grant</th>
                <th>Com Support</th>
            </tr>
        </thead>
    </table>
</main>

<div class="data-source">{!!Config::get('app.data-sources')!!}</div>
@endsection

@push('scripts')
<script src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js" integrity="sha256-eGE6blurk5sHj+rmkfsGYeKyZx3M4bG+ZlFyA7Kns7E=" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script>
<script src="{{asset(mix('js/vendors/datatables.min.js'))}}"></script>
<script src="{{asset(mix('js/database.js'))}}"></script>
@endpush
