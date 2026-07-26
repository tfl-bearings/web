# Downloads the real-brand assets (logo, photos, badges, favicons) used by
# this clone for LOCAL development. These are the university's property and
# are deliberately not committed to the repository.
#
# Run from the repo root:  .\scripts\fetch-assets.ps1

$ErrorActionPreference = "Stop"
$ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
$base = "https://www.gre.ac.uk/__data/assets/image"

New-Item -ItemType Directory -Force "public/images/real" | Out-Null

$items = @(
    # homepage photography
    @{ url = "0023/363038/varieties/v1200.jpg"; out = "hero.jpg" },
    @{ url = "0029/293825/varieties/v800.jpg"; out = "card-ug.jpg" },
    @{ url = "0026/270494/varieties/v800.jpg"; out = "card-pg.jpg" },
    @{ url = "0028/287452/varieties/v800.jpg"; out = "card-int.jpg" },
    @{ url = "0020/374321/varieties/v800.jpg"; out = "card-openday.jpg" },
    @{ url = "0032/296195/varieties/v800.jpg"; out = "card-openday2.jpg" },
    @{ url = "0026/399302/varieties/v1200.jpg"; out = "banner-kent.jpg" },
    @{ url = "0034/293875/varieties/v800.jpg"; out = "card-scholarships.jpg" },
    @{ url = "0033/364686/varieties/v800.jpg"; out = "card-apprentice.jpg" },
    @{ url = "0033/407859/varieties/v800.jpg"; out = "card-online.jpg" },
    @{ url = "0020/353072/varieties/v1200.jpg"; out = "banner-tef.jpg" },
    # news photography
    @{ url = "0016/402316/varieties/v800.jpg"; out = "news-1.jpg" },
    @{ url = "0011/402122/varieties/v800.jpeg"; out = "news-2.jpg" },
    @{ url = "0015/402135/varieties/v800.jpg"; out = "news-3.jpg" },
    @{ url = "0021/401934/varieties/v800.jpg"; out = "news-4.jpg" },
    @{ url = "0021/401862/varieties/v800.jpg"; out = "news-5.jpg" },
    @{ url = "0018/401490/varieties/v800.jpg"; out = "news-6.jpg" },
    # campus photography
    @{ url = "0023/270428/varieties/v800.jpg"; out = "campus-greenwich.jpg" },
    @{ url = "0028/270496/varieties/v800.jpg"; out = "campus-averyhill.jpg" },
    @{ url = "0031/287491/varieties/v800.jpg"; out = "campus-medway.jpg" },
    # logo + accreditation badges
    @{ url = "0035/265688/logo_final_on_white.png"; out = "logo.png" },
    @{ url = "0018/343053/varieties/v800.png"; out = "badge-tef.png" },
    @{ url = "0013/7132/varieties/v800.png"; out = "badge-alliance.png" },
    @{ url = "0023/381155/varieties/v800.png"; out = "badge-studentcrowd.png" },
    @{ url = "0021/402861/trailblazer-logo-pale-stone-500.png"; out = "badge-stonewall.png" }
)

foreach ($i in $items) {
    $dest = "public/images/real/$($i.out)"
    Write-Host "Fetching $($i.out)..."
    curl.exe -s -A $ua --max-time 30 "$base/$($i.url)" -o $dest
}

# favicons (served by Next from the app directory)
Write-Host "Fetching favicons..."
curl.exe -s -A $ua "$base/0024/208914/varieties/v96.png" -o "app/icon.png"
curl.exe -s -A $ua "$base/0024/208914/varieties/v180.png" -o "app/apple-icon.png"

Write-Host "Done. $((Get-ChildItem 'public/images/real').Count) assets in public/images/real."
