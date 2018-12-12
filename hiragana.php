<!DOCTYPE html>
<html lang="fr">

<head>
  <title>Reviser Les Hiragana</title>

<?php include 'header.php'; ?>

<div class="container" id="maCo">
    <div class="row">
      <div class="col-sm-12 text-center">
        <h1>HIRAGANA</h1>
      </div>

      <div class="col-sm-12 text-center d-none d-lg-block d-xl-block">
         <span id="result"></span>
         <button type="button" title="Reset à 0 et sauvegarde dans l'historique"class="btn btn-sm btn-link d-inline bReset" onclick="scoreReset()">Reset le score</button>
         <button type="button" title="Voir l'historique et le score total"name="button" class="btn d-inline scorer"> <img src="img\scorer.png" alt="Historique des scores" class="img-fluid btn"> </button>
      </div>
      <div class="col-sm-12 text-center d-block  d-lg-none d-xl-none">
        <span id="xsresult"></span>
        <button type="button" title="Reset à 0 et sauvegarde dans l'historique"class="btn btn-sm btn-link d-inline bReset xsreset" onclick="scoreReset()">Reset le score</button>
        <button type="button" title="Voir l'historique et le score total"name="button" class="btn d-inline xshisto scorer"> <img src="img\scorer.png" alt="Historique des scores" class="img-fluid btn"> </button>
     </div>
    </div>
    <div class="row rowq1">
      <div class="col-sm-3">
      </div>
      <div class="col-sm-6 question q1 d-flex align-items-center justify-content-center">
      </div>
      <div class="col-sm-3">
        <div id="sResult">
          <div id="closeResult">  </div>
          <div id="sResultP"></div>
          <button type="button" id="hrbutt"  onclick="historeset()">Reset l'historique</button>
          <ul id="sResultUl">
            <li>  </li>
          </ul>
        </div>

      </div>
    </div>
    <div class="row" id="buttons">
      <button onclick="verif()" type="button" name="c1" class="col-sm btn btn-primary choice  " id="chA">
      </button>
      <button onclick="verif()" type="button" name="c1" class="col-sm btn btn-primary choice  " id="chB">
      </button>
      <button onclick="verif()" type="button" name="c1" class="col-sm btn btn-primary choice  " id="chC">
      </button>
      <button onclick="verif()" type="button" name="c1" class="col-sm btn btn-primary choice " id="chD">
      </button>

    </div>

</div><!--main container -->
<?php include 'footer.php'; ?>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
<script src="script.js" charset="utf-8"></script>
</body>
</html>
