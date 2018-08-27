<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="school_name"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
            </div>
            <div class="modal-body">
                <input type="text" id="myInput" style="margin-bottom: 10px;" class="form-control" onkeyup="autoQuestion()" placeholder="Search Question..">
                <input type="text" id="myOutput" class="form-control" onkeyup="autoAnswer()" placeholder="Search Answer..">
                <div id="school_desc"></div>
            </div>
            <div class="modal-footer" id="school_feature">
            </div>
        </div>
    </div>
</div>
