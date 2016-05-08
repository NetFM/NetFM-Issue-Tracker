document.write("<div id='signup1' class='modal'> <div class='modal-content'> <h4>Register your interest</h4> <form action='' class='col s12'> <div class='row'> <div class='input-field col s6'> <input id='first_name' type='text' class='validate'> <label for='first_name'>First Name</label> </div> <div class='input-field col s6'> <input id='last_name' type='text' class='validate'> <label for='last_name'>Last Name</label> </div> </div> <div class='row'> <div class='input-field col s12'> <input id='company' type='text' class='validate'> <label for='company'>Company Name</label> </div> </div> <div class='row'> <div class='input-field col s12'> <input id='email' type='email' class='validate'> <label for='email'>Email</label> </div> </div> </form> </div> <div class='modal-footer'> <a href='#' class=' modal-action modal-close waves-effect waves-green btn-flat'>Submit</a> </div> </div>");
 $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      //ready: function() { alert('Ready'); }, // Callback for Modal open
      //complete: function() { alert('Closed'); } // Callback for Modal close
    }
  );
     /*

<div id='signup1' class='modal'>
    <div class='modal-content'>
        <h4>Register your interest</h4>
        <form action='' class='col s12'>
                    <div class='row'>
                        <div class='input-field col s6'>
                            <input id='first_name' type='text' class='validate'>
                                <label for='first_name'>First Name</label>
                            </div>
                            <div class='input-field col s6'>
                                <input id='last_name' type='text' class='validate'>
                                    <label for='last_name'>Last Name</label>
                                </div>
                            </div>
                            <div class='row'>
                                <div class='input-field col s12'>
                                    <input id='company' type='text' class='validate'>
                                        <label for='company'>Company Name</label>
                                    </div>
                                </div>
                                <div class='row'>
                                    <div class='input-field col s12'>
                                        <input id='email' type='email' class='validate'>
                                            <label for='email'>Email</label>
                                        </div>
                                    </div>
                        </form>
                    </div>
                    <div class='modal-footer'>
                        <a href='#' class=' modal-action modal-close waves-effect waves-green btn-flat'>Submit</a>
                    </div>
                </div>


     */