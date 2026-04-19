param(
    [string]$Target
)

$Node = "C:\Users\Viacheslav Romanov\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
$Script = Join-Path $PSScriptRoot "render-riders.js"

if ($Target) {
    & $Node $Script $Target
} else {
    & $Node $Script
}
