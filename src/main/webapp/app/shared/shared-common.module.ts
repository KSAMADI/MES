import { NgModule } from '@angular/core';

import { MesSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [MesSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [MesSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MesSharedCommonModule {}
