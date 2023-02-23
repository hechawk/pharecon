<?php

ini_set('display_errors', '0');
register_shutdown_function(function () {
    $lastError = error_get_last();

    if (!empty($lastError) && $lastError['type'] == E_ERROR) {
        http_response_code(500);
        echo $lastError["message"];
    }
});

if ($_SERVER['REQUEST_METHOD'] !== 'POST' ||
    count($_POST) === 0 ||
    !key_exists("formkey-stacks_in_1224", $_POST) ||
    $_POST["formkey-stacks_in_1224"] !== "stacks_in_1192") {
    http_response_code(500);
    echo "Error: Invalid request";
    exit;
}
unset($_POST["formkey-stacks_in_1224"]);
require '../../rw_common/plugins/stacks/foundation-forms/foundation-autoload.php';

$templateFile = 'stacks_in_1224_template.txt';
$template = file_exists($templateFile) ? file_get_contents($templateFile) : '';

$cmsTemplate = boolval("0");
if ($cmsTemplate) {
    require '../../rw_common/plugins/stacks/total-cms/totalcms.php';
    $totaltext = new \TotalCMS\Component\Text('cmsid');
    $template = $totaltext->get_contents();
}

$useTemplate = boolval("1")||boolval("0");

$mailer = new \Foundation\Mailer([
    'adminTo'      => 'info@pharecon.de',
    'adminFrom'    => 'info@pharecon.de',
    'adminSubject' => 'An error occurred with your website form',

    'fromName'     => '{{name}}',
    'fromAddress'  => '{{email}}',
    'replyName'    => '',
    'replyAddress' => '',

    'toName'       => 'Kontakt Website',
    'toAddress'    => 'info@pharecon.de',
    'ccName'       => '',
    'ccAddress'    => '',
    'bccName'      => '',
    'bccAddress'   => '',

    'useSmtp'      => boolval("0"),
    'smtpHost'     => 'smtp.example.com',
    'smtpUser'     => 'user@example.com',
    'smtpPass'     => 'secret',
    'smtpPort'     => intval("587"),
    'smtpSecure'   => 'tls',

    'subject'      => 'Nachricht von {{name}}',
    'useTemplate'  => $useTemplate,
    'template'     => $template,

    'acceptAttachments' => boolval("1")
]);

$mailer->send();
