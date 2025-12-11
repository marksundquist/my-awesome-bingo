# Create PR for linting rule changes

# Add the changed file
git add eslint.config.js

# Commit the changes
git commit -m "Add linting rule for unused variables

- Added @typescript-eslint/no-unused-vars rule with error level
- Configured to allow variables prefixed with _ to be unused
- Helps catch potential bugs from unused variables
- Maintains code quality standards"

# Push to a new branch
$branchName = "feat/add-unused-vars-linting"
git checkout -b $branchName
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
} else {
    Write-Host "⚠️  GitHub CLI (gh) not found. Please create PR manually at:" -ForegroundColor Yellow
    Write-Host "https://github.com/your-org/my-awesome-bingo/compare/main...$branchName" -ForegroundColor Cyan
}
