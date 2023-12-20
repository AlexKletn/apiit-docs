import {Tree, Typography} from "antd";
import usePageTitle from "@/hooks/usePageTitle.ts";

const { Title, Paragraph, Text} = Typography;
const { DirectoryTree } = Tree;

const PrepareDirectoryStructureSection = () => {
  usePageTitle("Prepare layer structure");

  return (
    <div>
      <Title>
        Prepare layer structure
      </Title>

      <Paragraph>
        Recommended API level structure
      </Paragraph>

      <Paragraph>
        Let&apos;s assume that in your project there are entities:
        <Text code>User</Text>,
        <Text code>Article</Text>,
        <Text code>Section</Text>
      </Paragraph>

      <DirectoryTree
        multiple
        defaultExpandAll
        treeData={[
          {
            key: "src",
            title: "src",

            children: [
              {
                key: "api",
                title: "api",

                children: [
                  {
                    key: "hosts",
                    title: "_hosts #for multiple hosts",

                    children: [
                      {
                        key: "_hosts/defaultHost.ts",
                        title: "<hostName>.ts",
                        isLeaf: true
                      },
                    ]
                  },
                  {
                    key: "articles",
                    title: "articles",

                    children: [
                      {
                        key: "articles/\<endpointName\>.ts",
                        title: "<endpointName>.ts",
                        isLeaf: true
                      },
                      {
                        key: "articles/index.ts",
                        title: "index.ts",
                        isLeaf: true
                      },
                    ]
                  },
                  {
                    key: "sections",
                    title: "sections",

                    children: [
                      {
                        key: "sections/\<endpointName\>.ts",
                        title: "<endpointName>.ts",
                        isLeaf: true
                      },
                      {
                        key: "sections/index.ts",
                        title: "index.ts",
                        isLeaf: true
                      },
                    ]
                  },
                  {
                    key: "host",
                    title: "host.ts #for one hosts",
                    isLeaf: true
                  },
                  {
                    key: "index.ts",
                    title: "index.ts",
                    isLeaf: true
                  }
                ]
              }
            ]
          }
        ]}
      />
    </div>
  )
}

export default PrepareDirectoryStructureSection;
