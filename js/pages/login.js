function login() {
    return `
    <div class="container mt-3">
    <div class="row align-items-center">
        <div class="col-md-10 mx-auto col-lg-5">                
            <form action="" class="p-4 p-md-5 border rounded-3 bg-light" >
                <div class="text-center mb-3">
                    <img style="height: 100px; " src="img/user.png" alt="">
                </div>                
                <h5 class="text-success text-center mb-3">Gestão de Clientes</h5>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="inputEmail" placeholder="E-mail">
                    <label for="inputEmail">E-mail</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="inputPassword" placeholder="Senha">
                    <label for="inputPassword">Senha</label>
                </div>
                <div class="checkbox mb-3">
                    <label for="">
                        <input type="checkbox" value="Lembrar-me"> Lembrar-me
                    </label>
                </div>
                <button  class="btn btn-lg btn-success w-100" type="submit">Entrar</button>
            </form>
        </div>
    </div>
</div>
`
}