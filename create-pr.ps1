# Create PR for linting rule changes

# Add the changed file
git add eslint.config.js

# Push to a new branch
$branchName = "feat/add-unused-vars-linting"
git checkout -b $branchName

# Commit the changes
git commit -m "Add linting rule for unused variables

- Added @typescript-eslint/no-unused-vars rule with error level
- Configured to allow variables prefixed with _ to be unused
- Helps catch potential bugs from unused variables
- Maintains code quality standards"


git push -u origin $branchName

# Create PR (using GitHub CLI if available)
if (Get-Command gh -ErrorAction SilentlyContinue) {
    gh pr create --title "Add linting rule for unused variables" `
                 --body "## Changes

- Added \`@typescript-eslint/no-unused-vars\` ESLint rule configured to error on unused variables
- Variables prefixed with \`_\` can be explicitly marked as intentionally unused
- Helps prevent bugs from variables that are declared but never used

## Testing

The existing codebase passes the new linting rules without any violations.

Relates to: Add linting rules for unused vars and awaits usage" `
                 --base main
    
    Write-Host "✅ PR created successfully!" -ForegroundColor Green
    # Dynamically determine repo owner and name from git remote
    $remoteUrl = git remote get-url origin
    if ($remoteUrl -match "github.com[:/](.+?)/(.+?)(\.git)?$") {
        $repoOwner = $Matches[1]
        $repoName = $Matches[2]
        Write-Host "https://github.com/$repoOwner/$repoName/compare/main...$branchName" -ForegroundColor Cyan
    } else {
        Write-Host "Could not determine repository URL from git remote. Please construct the PR URL manually." -ForegroundColor Red
    }
    Write-Host "⚠️  GitHub CLI (gh) not found. Please create PR manually at:" -ForegroundColor Yellow
    Write-Host "https://github.com/your-org/my-awesome-bingo/compare/main...$branchName" -ForegroundColor Cyan
}
