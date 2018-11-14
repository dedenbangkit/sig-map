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
@endsection

@push('scripts')
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script>
<script src="{{asset('js/vendors/datatables.min.js')}}"></script>
<script src="{{asset(mix('js/database.js'))}}"></script>
@endpush
