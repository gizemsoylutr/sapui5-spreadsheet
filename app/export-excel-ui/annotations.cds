using CalculationsService as service from '../../srv/data-provider';

annotate service.Calculations with @(UI.SelectionFields: [
    CalculationId
]);

annotate service.Calculations with @(UI.LineItem: [
    {
        $Type: 'UI.DataField',
        Value: CalculationId,
    },
    {
        $Type: 'UI.DataField',
        Value: CalculationName,
    },
    {
        $Type: 'UI.DataField',
        Value: ProjectName,
    }
]);
