<nav class="menu nav--<?= $type ?>" role="navigation">
    <ul class="ul--<?= $type ?>">
        <?php foreach ($site->children()->visible() as $item): ?>
            <li class="<?= $type ?>--item">
                <a href="<?= $item->url() ?>"<?= e($item->isOpen(), ' class="is-active"') ?>><?= $item->title()->html() ?></a>
            </li>
        <?php endforeach ?>
    </ul>
</nav>
