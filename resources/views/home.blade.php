@extends('layouts.app')

@section('dropdown-menu')
    @if (Auth::User()->admin == 1)
        <li>
            <a href="{{ route('admin') }}"> Panel </a>

        </li>
    @endif
    @if (Auth::User()->enable == 1)
        <li>
            <a href="{{ route('play') }}"> Juego </a>

        </li>
    @endif

@endsection

@section('content')


<div class="container">
    <div class="row">
        <div id="alert_success_profile_user" class="alert alert-success alert-dismissible" role="alert" style="display: none;">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <strong>Warning!</strong> Better check yourself, you're not looking too good.
        </div>
    </div>
</div>

<div class="container">
    <div class="row ">
        <div class="col-sm-12 col-md-12 user-details center-block centered" >
            <div class="user-image">
                <img src="http://www.gravatar.com/avatar/2ab7b2009d27ec37bffee791819a090c?s=100&d=mm&r=g" alt="Karan Singh Sisodia" title="Karan Singh Sisodia" class="img-circle">
            </div>
            <div class="user-info-block center-block ">
                <div class="user-heading">
                    <h3>{{Auth::User()->user_name}}</h3>
                    <span class="help-block">{{Auth::User()->name}}</span>
                </div>
                <ul class="navigation col-xs-12 list-inline">
                    <li class="active col-xs-4 ">
                        <a class="centered" data-toggle="tab" href="#information">
                            PROFILE
                        </a>
                    </li>
                    <li class="col-xs-4 ">
                        <a class="centered" data-toggle="tab" href="#settings">
                            EDIT PROFILE
                        </a>
                    </li>
                    <li class="col-xs-4 ">
                        <a class="centered" data-toggle="tab" href="#email">
                            SCORE
                        </a>
                    </li>
                </ul>
                <div class="user-body centered">
                    <div class="tab-content col-md-12">
                        <div id="information" class="tab-pane active col-md-12">
                            <h4>Account Information</h4>
                            <div class="container ">
                                <div class="row">
                                    <form class="form-horizontal col-md-12">
                                        <fieldset class="centered col-md-12">

                                            <div class="form-group">
                                                <label class="col-md-4 control-label" for="textinput">Name</label>
                                                <label class="col-md-1 control-label" for="textinput">{{Auth::User()->name}}</label>

                                            </div>

                                            <!-- Text input-->
                                            <div class="form-group">
                                                <label class="col-md-4 control-label" for="textinput">Apellidos</label>
                                                <label class="col-md-1 control-label" for="textinput">{{Auth::User()->apellido}}</label>
                                            </div>

                                            <!-- Text input-->
                                            <div class="form-group">
                                                <label class="col-md-4 control-label" for="textinput">Email</label>
                                                <label class="col-md-1 control-label" for="textinput">{{Auth::User()->email}}</label>

                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-4 control-label" for="textinput">Telefono</label>
                                                <label class="col-md-1 control-label" for="textinput">{{Auth::User()->telefono}}</label>

                                            </div>


                                        </fieldset>
                                    </form>

                                </div>
                            </div>

                        </div>
                        <div id="settings" class="tab-pane">
                            <h4>Edit Information</h4>
                            <div class="container">
                                <div class="row">
                                    <form class="form-horizontal" >

                                        <fieldset>
                                            <div class="form-group">
                                                <label class="col-md-4 control-label" for="textinput">Name</label>
                                                <div class="col-md-4">
                                                    <input id="inputname" name="textinput" placeholder="input your name" class="form-control input-md"  type="text">

                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-4 control-label" for="textinput">Apellido</label>
                                                <div class="col-md-4">
                                                    <input id="inputapellido" name="textinput" placeholder="input your apellido" class="form-control input-md"  type="text">

                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label class="col-md-4 control-label" for="textinput">User Name</label>
                                                <div class="col-md-4">
                                                    <input id="inputusername" name="textinput" placeholder="input your user name" class="form-control input-md"  type="text">

                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-4 control-label" for="textinput">Password</label>
                                                <div class="col-md-4">
                                                    <input id="inputpassword" name="textinput"  type="password" placeholder="input your password" class="form-control input-md"  type="text">

                                                </div>
                                            </div>


                                            <div class="form-group">
                                                <label class="col-md-4 control-label" for="textinput">Email</label>
                                                <div class="col-md-4">
                                                    <input id="inputemail"  type="email" name="textinput" placeholder="input your email" class="form-control input-md"  type="text">

                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-4 control-label" for="textinput">Telefono</label>
                                                <div class="col-md-4">
                                                    <input id="inputtelefono" name="textinput" placeholder="input your telefono" class="form-control input-md"  type="text">

                                                </div>
                                            </div>


                                            <div class="form-group">
                                                <label class="col-md-4 control-label" ></label>
                                                <div class="col-md-8">
                                                    <input   id="saveUser" name="{{Auth::User()->id}}" class="btn btn-success" value="Save"/>

                                                </div>
                                            </div>

                                        </fieldset>
                                    </form>

                                </div>
                            </div>
                        </div>
                        <div id="email" class="tab-pane">
                            <h4>Puntuación</h4>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


@endsection

