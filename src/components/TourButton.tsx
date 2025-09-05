import React from 'react';
import { Button } from '@/components/ui/button';
import { HelpCircle } from 'lucide-react';
import { useUserInfoQuery } from '@/redux/Auth/auth.api';
import { startTour, restartTour, isTourCompleted } from '@/utils/simpleTourService';

const TourButton: React.FC = () => {
  const { data: userData } = useUserInfoQuery(undefined);
  const userRole = userData?.data?.role || 'user';

  const handleStartTour = () => {
    startTour(userRole);
  };

  const handleRestartTour = () => {
    restartTour(userRole);
  };

  const tourCompleted = isTourCompleted(userRole);

  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={handleStartTour}
        className="flex items-center gap-2"
        data-tour="tour-trigger"
      >
        <HelpCircle className="h-4 w-4" />
        {tourCompleted ? 'Take Tour Again' : 'Take Tour'}
      </Button>
      
      {tourCompleted && (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleRestartTour}
          className="text-xs"
        >
          Reset Tour
        </Button>
      )}
    </div>
  );
};

export default TourButton;
