// EKS add-ons
export * from './coredns';
export * from './kube-proxy';
export * from './vpc-cni';

// Self-managed add-ons
export * from './appmesh';
export * from './argocd';
export * from './aws-for-fluent-bit';
export * from './aws-loadbalancer-controller';
export * from './aws-node-termination-handler';
export * from './calico';
export * from './cluster-autoscaler';
export * from './container-insights';
export * from './external-dns';
export * from './karpenter';
export * from './metrics-server';
export * from './nested-stack';
export * from './nginx';
export * from './opa-gatekeeper';
export * from './secrets-store';
export * from './secrets-store/secret-provider';
export * from './ssm-agent';
export * from './velero';
export * from './xray';

export class Constants {
    public static readonly SSP_ADDON = "ssp-addon";
}
