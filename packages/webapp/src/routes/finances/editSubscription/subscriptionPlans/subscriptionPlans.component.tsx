import { useQuery } from '@apollo/client';

import { mapConnection } from '../../../../shared/utils/graphql';
import { useActiveSubscriptionDetails } from '../../activeSubscriptionContext/activeSubscriptionContext.hooks';
import { SUBSCRIPTION_PLANS_ALL_QUERY } from './subscriptionPlans.graphql';
import { PlanItem, Plans } from './subscriptionPlans.styles';

export type SubscriptionPlansProps = {
  onPlanSelection: (id: string | null | undefined) => void;
  loading: boolean;
};

export const SubscriptionPlans = ({ onPlanSelection, loading }: SubscriptionPlansProps) => {
  const { activeSubscription } = useActiveSubscriptionDetails();

  const { data } = useQuery(SUBSCRIPTION_PLANS_ALL_QUERY);

  return (
    <Plans>
      {mapConnection(
        (plan) => (
          <PlanItem
            key={plan.id}
            plan={plan}
            onSelect={onPlanSelection}
            activeSubscription={activeSubscription}
            loading={loading}
          />
        ),
        data?.allSubscriptionPlans
      )}
    </Plans>
  );
};
