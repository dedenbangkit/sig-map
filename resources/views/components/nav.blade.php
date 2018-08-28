<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <a class="navbar-brand" href="#"><img src="{{asset('images/logo/unicef-logo.png')}}" height="25"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>

    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Database</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">Stats</a>
                <div class="dropdown-menu" aria-labelledby="dropdown01">
                    <a class="dropdown-item" href="#">Water Supply</a>
                    <a class="dropdown-item" href="#">Sanitation</a>
                    <a class="dropdown-item" href="#">Hygiene</a>
                    <a class="dropdown-item" href="#">Management</a>
                </div>
            </li>
        </ul>
        <div class="form-inline my-2 my-lg-0">
		<form onsubmit="focusTo()">
            <a href="#" onclick="focusNormal()" class="btn btn-light my-2 my-sm-0"><i class="fa fa-expand"></i></a>
            <a href="#" onclick="maps.zoomIn()" class="btn btn-light my-2 my-sm-0"><i class="fa fa-search-minus"></i></a>
            <a href="#" onclick="maps.zoomOut()" class="btn btn-light my-2 my-sm-0"><i class="fa fa-search-plus"></i></a>
            <input id="find" onkeydown="jqUI()" type="text" placeholder="Search School" class="form-control mr-sm-2">
            <input id="zoom_find" type="hidden">
			<input type="submit" id="find_submit" style="position: absolute; left: -9999px"/>
            <a href="#" onclick="focusTo()" class="btn btn-primary my-2 my-sm-0"><i class="fa fa-search"></i></a>
		</form>
        </div>
    </div>
</nav>
