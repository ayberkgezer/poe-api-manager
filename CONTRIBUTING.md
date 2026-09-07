### CONTRIBUTING.md

```md
# Contributing to poe-api-manager

First off, thanks for taking the time to contribute! 🎉

The following is a set of guidelines for contributing to poe-api-manager. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Code of Conduct

This project and everyone participating in it is governed by the [poe-api-manager Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [ayberkgezer@outlook.com](mailto:ayberkgezer@outlook.com).

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for poe-api-manager. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

- **Ensure the bug was not already reported** by searching on GitHub under [Issues](https://github.com/ayberkgezer/poe-api-manager/issues).
- If you're unable to find an open issue addressing the problem, [open a new one](https://github.com/ayberkgezer/poe-api-manager/issues/new). Be sure to include a **title and clear description**, as much relevant information as possible, and a **code sample** or an **executable test case** demonstrating the expected behavior that is not occurring.

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for poe-api-manager, including completely new features and minor improvements to existing functionality.

- **Ensure the enhancement was not already suggested** by searching on GitHub under [Issues](https://github.com/ayberkgezer/poe-api-manager/issues).
- If you find an enhancement that matches your suggestion, feel free to add additional comments or ideas.
- If you cannot find an existing issue, [open a new one](https://github.com/ayberkgezer/poe-api-manager/issues/new). Be sure to include a **title and clear description**, as much relevant information as possible, and a **code sample** or an **executable test case** demonstrating the expected behavior.

### Pull Requests

The process described here has several goals:

- Maintain poe-api-manager's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible poe-api-manager
- Enable a sustainable system for poe-api-manager's maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Fork the repository and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

### Coding Style

- Please follow the coding style used throughout the project.
- Ensure your code is properly formatted and linted.

## Releasing

Releases are cut by pushing a tag; merging to `main` does not publish.

```bash
# bump "version" in package.json, update Changelog.md, merge to main, then:
git tag v2.0.0
git push origin v2.0.0
```

`release.yml` then builds, tests, verifies the tag matches `package.json`,
creates the GitHub release and publishes to npm.

Publishing uses npm **trusted publishing** (OIDC) — there is no `NPM_TOKEN`
secret. Authentication is a short-lived token minted per workflow run from the
`id-token: write` permission. This requires a one-time setup at
`npmjs.com/package/poe-api-manager/access` → Trusted Publisher:

| Field | Value |
| --- | --- |
| Publisher | GitHub Actions |
| Organization or user | `ayberkgezer` |
| Repository | `poe-api-manager` |
| Workflow filename | `release.yml` |
| Environment | *(leave empty)* |

If the workflow filename ever changes, update it there too or publishing will
fail with a 404/auth error.

## License

By contributing to poe-api-manager, you agree that your contributions will be licensed under its MIT License.
