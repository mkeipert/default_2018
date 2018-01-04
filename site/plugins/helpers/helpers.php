<?php

function editButton() {
  if ($user = site()->user()) {
    echo '<a class="kirby-edit-button" href="' . url('panel/pages/' . page()->id() . '/edit') . '">edit</a>';
  }
}

function cookieBanner() {
   echo '<div class="cookie-message"><p>Um unsere Webseite für Sie optimal zu gestalten und fortlaufend verbessern zu können, verwenden wir Cookies. Weitere Informationen hierzu erhalten Sie in unserer Datenschutzerklärung.</a></p><p><strong><a class="cookie-close" href>Ja! Ich stimme der Verwendung von Cookies zu.</a></strong></p></div>';
  }
