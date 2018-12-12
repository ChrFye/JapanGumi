<!DOCTYPE html>
<html lang="fr">
<head>
  <title>Reviser Les Kanjis de niveau JLPT4</title>

<?php include 'header.php'; ?>

<div class="container " id="maCo">
    <div class="row">
      <div class="col-sm-12 text-center">
        <h1>KANJI Nv.5</h1>
      </div>

      <div class="col-sm-12 text-center">
         <span id="result"></span>
         <button type="button" title="Reset à 0 et sauvegarde dans l'historique"class="btn btn-sm btn-link d-inline bReset" onclick="scoreReset()">Reset le score</button>
         <button type="button" title="Voir l'historique et le score total"name="button" id="scorer" class="btn d-inline"> <img src="img\scorer.png" alt="Historique des scores" class="img-fluid btn"> </button>
      </div>
    </div>
    <div class="row rowq1">
      <div class="col-sm-3">
      </div>
      <div class="col-sm-6 question q1 d-flex align-items-center justify-content-center">
      </div>
      <div class="col-sm-3">
        <div id="sResult">
          <div id="sResultP"></div>
          <button type="button" id="hrbutt"  onclick="historeset()">Reset l'historique</button>
          <ul id="sResultUl">
            <li>  </li>
          </ul>
        </div>

      </div>
    </div>
    <div class="row justify-content-center" id="buttons">
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
<script src="scriptkn5.js" charset="utf-8"></script>
</body>
</html>
