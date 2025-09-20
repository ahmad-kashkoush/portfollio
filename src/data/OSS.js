export const openSourceContributions = [
    {
        project: "GitLab",
        url: "https://about.gitlab.com/",
        logo: "/icons/gitlab.svg",
        summary: "Contributed to GitLab’s Web IDE and contributor success apps, improving developer UX.",
        highlights: [
            "Migrated native Fetch to Axios for consistency and better error handling. (Pull request: [MR](https://gitlab.com/gitlab-org/developer-relations/contributor-success/contributors-gitlab-com/-/merge_requests/759))",
            "Adjusted feature flag and contributor success forms with Vue, improving UX. (Pull requests: [MR1](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/184678), [MR2](https://gitlab.com/gitlab-org/developer-relations/contributor-success/contributors-gitlab-com/-/merge_requests/754))",
        ],
    },
    {
        project: "Accord Project",
        url: "https://accordproject.org/",
        logo: "icons/accord.png",
        summary: "Framework for smart legal contracts and automation of legal agreements.",
        highlights: [
            "Developed locale-based number/text formatter for the template engine using TypeScript. (Pull request: [PR](https://github.com/accordproject/template-engine/pull/22))",
            "Tested formatter accuracy using Jest, ensuring internationalization reliability.",
        ],
    },
    {
        project: "Stdlib",
        url: "https://github.com/stdlib-js",
        logo: "/icons/stdlib.svg",
        summary: "JavaScript and Node.js scientific computing library.",
        highlights: [
            "Added `include()` method to `fixedEndianArray`. (Pull request: [PR](https://github.com/stdlib-js/stdlib/pull/3283))",
            "Benchmarked performance improvements for consistent optimization.",
        ],
    },
    {
        project: "Jenkins",
        url: "https://www.jenkins.io/",
        logo: "icons/jenkins.svg",
        summary: "Automation server for CI/CD pipelines, widely used by developers.",
        highlights: [
            "Tested node connectivity in `AllNodesForLabelBuildParameterFactory`, boosting coverage by 22%. (Pull request: [PR1](https://github.com/jenkinsci/nodelabelparameter-plugin/pull/390))",
            "Tested permission checks validation in `PublicBuildStatusAction`, increasing coverage by 7%. (Pull request: [PR2](https://github.com/jenkinsci/embeddable-build-status-plugin/pull/379))",
            "Tested `VersionMonitor` to ensure correct version mismatch handling. (Pull request: [PR3](https://github.com/jenkinsci/versioncolumn-plugin/pull/303))",
            "Added unit tests for `PluginModernizer` using JUnit and Mockito. (Pull request: [PR4](https://github.com/jenkins-infra/plugin-modernizer-tool/pull/855))",
            "Optimized plugin performance by disabling redundant dependency loading. (Pull request: [PR5](https://github.com/jenkinsci/lockable-resources-plugin/pull/757))",
        ],
    },
];
